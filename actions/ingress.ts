"use server";

import {
    type CreateIngressOptions,
    IngressAudioEncodingPreset,
    IngressClient,
    IngressInput,
    IngressVideoEncodingPreset,
    RoomServiceClient,
} from "livekit-server-sdk";

import {TrackSource} from "livekit-server-sdk/dist/proto/livekit_models";

import {db} from "@/lib/db";
import {getSelf} from "@/lib/auth-service";
import {revalidatePath} from "next/cache";

const roomService = new RoomServiceClient(
    'https://ambient-n3hbxh8k.livekit.cloud',
    'APIKeRzkdFDJdHh',
    'fByWNT1RMRQbvkSEq0uveRSVzwvz9CTmjIrsWb3ZRQk',
);

const ingressClient = new IngressClient('https://ambient-n3hbxh8k.livekit.cloud');

export const resetIngresses = async (hostIdentity: string) => {
    const ingresses = await ingressClient.listIngress({
        roomName: hostIdentity,
    });

    const rooms = await roomService.listRooms([hostIdentity]);

    for (const room of rooms) {
        await roomService.deleteRoom(room.name);
    }

    for (const ingress of ingresses) {
        if (ingress.ingressId) {
            await ingressClient.deleteIngress(ingress.ingressId);
        }
    }
};

export const createIngress = async (ingressType: IngressInput) => {

    const self = await getSelf();

    await resetIngresses(self?.id!);

    const options: CreateIngressOptions = {
        name: self?.username!,
        roomName: self?.id!,
        participantName: self?.username!,
        participantIdentity: self?.id!,
    };

    if (ingressType === IngressInput.WHIP_INPUT) {
        options.bypassTranscoding = true;
    } else {
        options.video = {
            source: TrackSource.CAMERA,
            preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
        };
        options.audio = {
            source: TrackSource.MICROPHONE,
            preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS
        };
    }
    ;

    console.log("ingressType:", ingressType);

    try {
        const ingress = await ingressClient.createIngress(ingressType, options);

        console.log("Ingress created successfully:", ingress);
        console.log("Ingress URL:", ingress.url);
        console.log("Ingress Stream Key:", ingress.streamKey);

        if (!ingress || !ingress.url || !ingress.streamKey) {
            throw new Error("Failed to create ingress");
        }

        await db.stream.update({
            where: {userId: self?.id!},
            data: {
                ingressId: ingress.ingressId,
                serverUrl: ingress.url,
                streamKey: ingress.streamKey,
            },
        });

        revalidatePath(`/u/${self?.username!}/keys`);
        return ingress;
    } catch (error) {
        console.error("Error creating ingress:", error);
        throw new Error("Failed to create ingress");
    }
};
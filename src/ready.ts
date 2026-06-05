import { SodiumAdapter, setSodium } from './sodium.ts';

export const ready = async (sodium?: SodiumAdapter): Promise<void> => {
    if (sodium) {
        setSodium(sodium);
    } else {
        const _sodium = await import('libsodium-wrappers-sumo');
        await _sodium.default.ready;
        setSodium(_sodium.default as unknown as SodiumAdapter);
    }
};

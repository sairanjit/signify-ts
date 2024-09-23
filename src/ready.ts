import _sodium from './libsodium';

export const ready: () => Promise<void> = async () => {
    await _sodium.ready;
};

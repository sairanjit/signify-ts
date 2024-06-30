import _sodium from 'react-native-libsodium';

export const ready: () => Promise<void> = async () => {
    await _sodium.ready;
};

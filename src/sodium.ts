export interface SodiumAdapter {
    // constants
    crypto_sign_SEEDBYTES: number;
    crypto_pwhash_SALTBYTES: number;
    crypto_pwhash_ALG_ARGON2ID13: number;

    // functions
    randombytes_buf(size: number): Uint8Array;
    crypto_sign_seed_keypair(seed: Uint8Array): {
        publicKey: Uint8Array;
        privateKey: Uint8Array;
    };
    crypto_sign_detached(msg: Uint8Array, sk: Uint8Array): Uint8Array;
    crypto_sign_verify_detached(
        sig: Uint8Array,
        msg: Uint8Array | string,
        pk: Uint8Array
    ): boolean;
    crypto_pwhash(
        keylen: number,
        passwd: string | Uint8Array,
        salt: Uint8Array,
        opslimit: number,
        memlimit: number,
        alg: number
    ): Uint8Array;
    crypto_sign_ed25519_sk_to_curve25519(sk: Uint8Array): Uint8Array;
    crypto_sign_ed25519_pk_to_curve25519(pk: Uint8Array): Uint8Array;
    crypto_scalarmult_base(sk: Uint8Array): Uint8Array;
    crypto_box_seal(msg: Uint8Array, pk: Uint8Array): Uint8Array;
    crypto_box_seal_open(
        cipher: Uint8Array,
        pk: Uint8Array,
        sk: Uint8Array
    ): Uint8Array;
}

let _sodium: SodiumAdapter | undefined;

export function setSodium(s: SodiumAdapter): void {
    _sodium = s;
}

export function getSodium(): SodiumAdapter {
    if (!_sodium) throw new Error('signify-ts: call ready() before use');
    return _sodium;
}

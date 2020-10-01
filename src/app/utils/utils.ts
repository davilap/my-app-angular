export default class Utils {
    static getRandomId(): string {
        let buf = [],
            chars = 'abcdefghijklmnopqrstuvwxyz0123456789',
            charlen = chars.length,
            length = 12;

        for (let i = 0; i < length; i++) {
            buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
        }

        return buf.join('');
    }

    static getNameFile(file: string): string {
        if (file && file.includes('cloudinary')) {
            return file.substring(file.lastIndexOf("/") + 1, file.lastIndexOf('.'))
        } else {
            return '';
        }
    }
}

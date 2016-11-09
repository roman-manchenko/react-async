// declare let require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };
interface NodeRequire {
    <T>(path: string): T;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string) => void;
}
interface Require {
    <T>(path: string): T;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string) => void;
}

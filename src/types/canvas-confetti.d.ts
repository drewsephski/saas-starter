declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    x?: number;
    y?: number;
    colors?: string[];
    shapes?: ('square' | 'circle')[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
    origin?: { x: number; y: number };
    useWorker?: boolean;
    resize?: boolean;
  }

  interface ConfettiFunction {
    (options?: ConfettiOptions): Promise<null>;
    (options: ConfettiOptions & { particleCount: number }): Promise<null>;
    (options: ConfettiOptions, globalOptions: { resize: boolean }): void;
  }

  const confetti: ConfettiFunction;
  export = confetti;
}

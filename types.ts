
export type AppID = 'work' | 'vision' | 'meet' | 'settings' | 'experience' | 'veo' | 'browser' | 'messages' | 'files' | 'notes' | 'wallpaper' | 'store' | 'terminal' | 'calculator' | 'camera' | 'gallery' | 'gemini';

export interface WindowState {
  id: AppID;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface OSState {
  isTabletMode: boolean;
  isDemoLoopActive: boolean;
  isControlCenterOpen: boolean;
  isLauncherOpen: boolean;
  isLocked: boolean;
  activeWindows: WindowState[];
}

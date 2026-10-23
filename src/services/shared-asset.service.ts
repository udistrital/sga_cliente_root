interface CoreMfModule {
  getSharedAssetUrl(path?: string): string;
}

type ModuleImporter = (moduleName: string) => Promise<unknown>;

export class SharedAssetService {
  private coreModule?: Promise<CoreMfModule>;

  constructor(
    private readonly importModule: ModuleImporter = (moduleName) =>
      System.import(moduleName)
  ) {}

  async getUrl(path = ""): Promise<string> {
    const coreModule = await this.getCoreModule();
    return coreModule.getSharedAssetUrl(path);
  }

  private getCoreModule(): Promise<CoreMfModule> {
    if (!this.coreModule) {
      this.coreModule = this.importModule("@udistrital/core-mf")
        .then((module) => {
          const coreModule = module as Partial<CoreMfModule>;

          if (typeof coreModule.getSharedAssetUrl !== "function") {
            throw new Error("core-mf no exporta getSharedAssetUrl");
          }

          return coreModule as CoreMfModule;
        })
        .catch((error) => {
          this.coreModule = undefined;
          throw error;
        });
    }

    return this.coreModule;
  }
}

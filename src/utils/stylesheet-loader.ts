export class StylesheetLoader {
  private readonly pendingLoads = new Map<string, Promise<void>>();

  constructor(private readonly documentRef: Document = document) {}

  load(url: string, id: string): Promise<void> {
    const pendingLoad = this.pendingLoads.get(id);

    if (pendingLoad) {
      return pendingLoad;
    }

    if (this.documentRef.getElementById(id)) {
      return Promise.resolve();
    }

    const load = new Promise<void>((resolve, reject) => {
      const link = this.documentRef.createElement("link");

      link.id = id;
      link.rel = "stylesheet";
      link.href = url;
      link.onload = () => resolve();
      link.onerror = () => {
        link.remove();
        reject(new Error(`No fue posible cargar ${url}`));
      };

      this.documentRef.head.appendChild(link);
    }).catch((error) => {
      this.pendingLoads.delete(id);
      throw error;
    });

    this.pendingLoads.set(id, load);
    return load;
  }
}

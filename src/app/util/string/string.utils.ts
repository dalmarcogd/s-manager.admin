
export class StringUtils {

  /**
   * Normaliza a string passada como parametro.
   */
  public static normalize(str: string | String) : string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
}

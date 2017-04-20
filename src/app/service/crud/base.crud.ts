import {BaseService} from "../base.service";
import {BaseDTO} from "../../model/base/base.dto";

/**
 * Created by Guilherme on 10/04/2017.
 */

export abstract class BaseCrudService<T extends BaseDTO> extends BaseService {

  /**
   * Retorna o dado especificado ou os dados do backend.
   */
  public read(id?: Number) : Promise<Array<T>> {
    return this.getHttpService().get(this.getPatch(), id).then((data) => this.extract(data));
  }

  /**
   * Executa a criação do dado no backend.
   */
  public create(data: T) : Promise<T> {
    return this.getHttpService().post(this.getPatch(), data).then((data) => this.extract(data));
  }

  /**
   * Executa a atualização dos dados no backend.
   */
  public update(data: T) : Promise<T> {
    return this.getHttpService().put(this.getPatch(), data).then((data) => this.extract(data));
  }

  /**
   * Executa a atualização dos dados no backend.
   */
  public deleteById(id: Number) : Promise<T> {
    return this.getHttpService().delete(this.getPatch(), id).then((data) => this.extract(data));
  }

  /**
   * Extrador de dados.
   */
  private extract(data: any) {
    if (data instanceof Array){
      return data as Array<T>;
    } else if (data instanceof BaseDTO){
      return data as T;
    } else if (data instanceof Number) {
      return data as Number;
    } else {
      return data;
    }
  }

  protected abstract getPatch(): string;
}

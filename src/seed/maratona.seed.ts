import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Maratona } from '../maratona/maratona.entity'
 
export default class MaratonaSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Maratona)
      .values([
        { aula: 'Full Cycle: Arquitetura e Estudo de Caso', url: 'http://maratona.fullcycle.com.br/arquitetura-e-estudo-de-caso' },
        { aula: 'Microsserviço Live Manager e Comunicação', url: 'http://maratona.fullcycle.com.br/microsservico-live-manager-e-comunicacao' },
        { aula: 'Realizando Streaming com Websockets e WebRTC', url: 'http://maratona.fullcycle.com.br/realizando-streaming-com-websockets-e-webrtc' },
        { aula: 'Microsserviços de Chat e CodeBot', url: 'http://maratona.fullcycle.com.br/microsservicos-de-chat-e-codebot' },
        { aula: 'Deploy com Docker e Kubernetes', url: 'http://maratona.fullcycle.com.br/deploy-com-docker-e-kubernetes' },
      ])
      .execute()
  }
}
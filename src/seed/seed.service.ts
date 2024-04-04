import { Injectable } from '@nestjs/common';
import { ClientsService } from './../clients/clients.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly clientsService: ClientsService) {}

  async runSeed() {
    await this.insertNewClients();

    return 'SEED EXECUTED';
  }

  private async insertNewClients() {
    await this.clientsService.deleteAllClients();

    const clients = initialData.clients;

    const insertPromises = [];

    clients.forEach((client) => {
      insertPromises.push(this.clientsService.create(client));
    });

    await Promise.all(insertPromises);

    return true;
  }
}

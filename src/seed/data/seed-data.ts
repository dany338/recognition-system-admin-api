import { v4 as uuid } from 'uuid';

interface SeedClientConfig {
  client_metadata_schema_id: number;
  default_bucket: string;
}

interface SeedClient {
  client_uid: string;
  name: string;
  configs?: SeedClientConfig[];
}


interface SeedData {
  clients: SeedClient[];
}

export const initialData: SeedData = {
  clients: [
    {
      client_uid: uuid(),
      name: 'Daniel Gallo Seed data 1',
      configs: [
        {
          client_metadata_schema_id: 1,
          default_bucket: 'bucket-1',
        },
        {
          client_metadata_schema_id: 2,
          default_bucket: 'bucket-2',
        },
      ],
    },
    {
      client_uid: uuid(),
      name: 'Daniel Gallo Seed data 2',
      configs: [
        {
          client_metadata_schema_id: 1,
          default_bucket: 'bucket-1',
        },
        {
          client_metadata_schema_id: 2,
          default_bucket: 'bucket-2',
        },
      ],
    },
    {
      client_uid: uuid(),
      name: 'Daniel Gallo Seed data 3',
      configs: [
        {
          client_metadata_schema_id: 1,
          default_bucket: 'bucket-1',
        },
        {
          client_metadata_schema_id: 2,
          default_bucket: 'bucket-2',
        },
      ],
    },
  ],
};

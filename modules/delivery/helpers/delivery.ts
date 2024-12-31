export const deliveriesQuery: string = `id, 
  users(id, first_name, last_name, email), 
  streets(id, name), 
  houses(id, number), 
  residents(id, first_name, last_name), 
  received_at, 
  companies(id, name)`;

export type selectDeliveriesQueryType = {
  id: string;
  users: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  streets: {
    id: string;
    name: string;
  };
  houses: {
    id: string;
    number: number;
  };
  residents: {
    id: string;
    first_name: string;
    last_name: string;
  };
  received_at: Date;
  companies: {
    id: string;
    name: string;
  };
};

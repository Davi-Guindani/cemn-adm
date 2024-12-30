export type selectAllDeliveriesQueryType = {
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

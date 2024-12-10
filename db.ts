import Dexie, { type EntityTable } from 'dexie';
interface User {
  id: number;
  email: string;
  password: string;
  phoneNumber:string;
  country:string;
}

const db = new Dexie('userDatabase') as Dexie & {User: EntityTable<User,
'id' // primary key "id" (for the typings only)
  >;
};

db.version(1).stores({
    User: '++id, &email, password,phoneNumber' // primary key "id" (for the runtime!)
});
  
export type { User };
export { db };


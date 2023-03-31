export interface Data{
  id: number;
  name: string;
  lecturas: Lecturas;
}

interface Lecturas{
  id: number;
  value: string;
}

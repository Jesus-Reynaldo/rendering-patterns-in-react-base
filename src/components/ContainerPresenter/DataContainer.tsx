import { useEffect, useState } from "react";
import { DataPresenter } from "./DataPresenter";
interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}
export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Error something went wrong");
        }
        const result = await response.json();
        setData(result);
      }
      catch (error) {
        setError(`Error: ${error}`);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};

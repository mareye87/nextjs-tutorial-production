import Link from "next/link";
import Image from "next/image";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${singleCocktailUrl}${id}`);
  if (!response.ok) {
    throw new Error("Fail to fetch a drink");
  }
  return response.json();
};

//params object will hold the value from the route
const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);

  const drinkName = data?.drinks[0]?.strDrink;
  const img = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={img}
        width={300}
        height={300}
        className="w-48 h-48 rounded-md shadow-lg mb-8 object-cover"
        priority
        alt={drinkName}
      ></Image>
      <h1 className="text-4xl mb-8">{drinkName}</h1>
    </div>
  );
};

export default SingleDrinkPage;

import PackageCard from "@/components/PackageCard";
import { client, urlFor } from "@/lib/sanity.client";
import { groq } from "next-sanity";

// This interface defines the shape of our data
interface Package {
  _id: string;
  name: string;
  price: string;
  includedEquipment: string[];
  imageGallery: any;
}

// Query to fetch all packages
const packagesQuery = groq`*[_type == "package"]{
  _id,
  name,
  price,
  includedEquipment,
  imageGallery,
}`;

export default async function PackagesPage() {
  const packages: Package[] = await client.fetch(packagesQuery);

  // --- DEBUGGING LOG ---
  // This log will appear in your VS Code terminal, not the browser
  console.log("Data fetched on Packages page:", packages);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Our Gym Packages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg._id}
            name={pkg.name}
            price={pkg.price}
            items={pkg.includedEquipment}
            imageGallery={pkg.imageGallery}
            whatsappUrl={`https://wa.me/91XXXXXXXXXX?text=I'm+interested+in+the+${encodeURIComponent(pkg.name)}`}
          />
        ))}
      </div>
    </main>
  );
}
// components/ClientPackageList.tsx
'use client'; 

import dynamic from "next/dynamic";

const PackageCard = dynamic(() => import('@/components/PackageCard'), { ssr: false });

const ClientPackageList = ({ packages }: { packages: any[] }) => {
  // --- BROWSER DEBUGGING LOG ---
  console.log('ClientPackageList component received packages:', packages);

  return (
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
  );
};

export default ClientPackageList;git
import { Address, Package } from "@/app/components/types/ProductType";
import { shipengine } from "@/app/lib/shipEngine";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      shipToAddress, // Fixed typo
      packages,
    }: { shipToAddress: Address; packages: Package[] } = await req.json();

    // Validate required fields
    if (!shipToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipToAddress and packages",
        }),
        { status: 400 }
      );
    }

    // Define the "ship from" address (e.g., your warehouse or business address)
    const shipFromAddress: Address = {
      name: "Michael Smith",
      phone: "+1 555 987 6543",
      addressLine1: "456 Oak Avenue",
      addressLine2: "Suite 200",
      cityLocality: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90001",
      countryCode: "US",
      addressResidentialIndicator: "no", // Indicates a commercial address
    };

    // Validate environment variables and ensure they are of type string[]
    const carrierIds: string[] = [
      process.env.SHIPENGINE_FIRST_COURIER,
      process.env.SHIPENGINE_SECOND_COURIER,
      process.env.SHIPENGINE_THIRD_COURIER,
      process.env.SHIPENGINE_FOURTH_COURIER,
    ].filter((id): id is string => Boolean(id)); // Explicitly filter out undefined values

    if (carrierIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid carrier IDs found in environment variables" }),
        { status: 400 }
      );
    }

    // Fetch shipping rates from ShipEngine
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress, // Fixed typo
        shipFrom: shipFromAddress,
        packages: packages,
      },
      rateOptions: {
        carrierIds: carrierIds,
      },
    });

    // Log details for debugging
    console.log("Ship To Address:", shipToAddress);
    console.log("Packages:", packages);
    console.log("Shipment Details:", shipmentDetails);

    // Return the response with shipment details
    return new Response(
      JSON.stringify({ shipToAddress, packages, shipmentDetails }),
      { status: 200 }
    );
  } catch (error: unknown) {
    // Type assertion to assert error as an instance of Error
    const errorMessage = (error instanceof Error) ? error.message : "Unknown error occurred";

    console.error("Error fetching shipping rates:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: errorMessage }),
      { status: 500 }
    );
  }
}

// import { Address, Package } from "@/app/components/types/ProductType";
// import { shipengine } from "@/app/lib/shipEngine";
// import { NextRequest } from "next/server";


// export async function POST(req: NextRequest) {
//   try {
//     const {
//       shipeToAddress,
//       packages,
//     }: { shipeToAddress: Address; packages: Package[] } = await req.json();

//     // Validate required fields
//     if (!shipeToAddress || !packages) {
//       return new Response(
//         JSON.stringify({
//           error: "Missing required fields: shipeToAddress and packages",
//         }),
//         { status: 400 }
//       );
//     }
// // in testing api you can use your  address which you have selected in create account
// // Define the "ship from" address (e.g., your warehouse or business address)
//     const shipFromAddress: Address = {
//       name: "Michael Smith",
//       phone: "+1 555 987 6543",
//       addressLine1: "456 Oak Avenue",
//       addressLine2: "Suite 200",
//       cityLocality: "Los Angeles",
//       stateProvince: "CA",
//       postalCode: "90001",
//       countryCode: "US",
//       addressResidentialIndicator: "no", // Indicates a commercial address
//     };

//     // Fetch shipping rates from ShipEngine
//     const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
//       shipment: {
//         shipTo: shipeToAddress,
//         shipFrom: shipFromAddress,
//         packages: packages,
//       },
//       rateOptions: {
//         carrierIds: [
//           process.env.SHIPENGINE_FIRST_COURIER || "",
//           process.env.SHIPENGINE_SECOND_COURIER || "",
//           process.env.SHIPENGINE_THIRD_COURIER || "",
//           process.env.SHIPENGINE_FOURTH_COURIER || "",
//         ].filter(Boolean), // Remove empty strings
//       },
//     });

//     // Log details for debugging
//     console.log("Ship To Address:", shipeToAddress);
//     console.log("Packages:", packages);
//     console.log("Shipment Details:", shipmentDetails);

//     // Return the response with shipment details
//     return new Response(
//       JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("Error fetching shipping rates:", error)
//     return new Response(JSON.stringify({ error: error }), {
//       status: 500,
//     });
//   }
// }

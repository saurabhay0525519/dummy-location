function calculateCircularPoints(p, q, x, y, K, r) {
    // Convert degrees to radians
    const rad_Lat1 = toRadians(p);
    const rad_Long1 = toRadians(q);
    const rad_Lat2 = toRadians(x);
    const rad_Long2 = toRadians(y);
  
    // Calculate angular distances
    const temp1 = Math.sin(rad_Long2 - rad_Long1) * Math.cos(rad_Lat2);
    const temp2 =
      Math.cos(rad_Lat1) * Math.sin(rad_Lat2) -
      Math.sin(rad_Lat1) * Math.cos(rad_Lat2) * Math.cos(rad_Long2 - rad_Long1);
  
    // Calculate angle 𝛼
    const alpha = (toDegrees(Math.atan2(temp1, temp2)) + 360) % 360;
  
    // Calculate angle 𝛽
    const beta = (2 * Math.PI) / K;
  
    // Generate K circular points
    const dummySet = [];
    for (let i = 0; i < K; i++) {
      const angle = alpha + beta * (i + 1);
      const newPoint = locFind(p, q, r, angle);
      dummySet.push(newPoint);
    }
  
    // Return shuffled dummy set
    return randomShuffle(dummySet);
  }
  
  // Helper function to convert degrees to radians
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  // Helper function to convert radians to degrees
  function toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
  
  // Placeholder for locFind function
  function locFind(p, q, r, angle) {
    // Implement locFind logic here
    // This function should return a new location based on the input parameters
    // Placeholder return value for demonstration purposes
    return { latitude: p + r * Math.cos(angle), longitude: q + r * Math.sin(angle) };
  }
  
  // Placeholder for randomShuffle function
  function randomShuffle(array) {
    // Implement randomShuffle logic here
    // This function should shuffle the elements of the input array
    // Placeholder return value for demonstration purposes
    return array.sort(() => Math.random() - 0.5);
  }
  
  // Example usage:
  const initialLocation = { latitude: 37.7749, longitude: -122.4194 };
  const K = 5; // Number of points
  const radius = 10; // Radius for locFind function
  const circularPoints = calculateCircularPoints(
    initialLocation.latitude,
    initialLocation.longitude,
    38.0000,
    -122.0000,
    K,
    radius
  );
  
  console.log(circularPoints);
  
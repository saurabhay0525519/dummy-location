function calculateNewCoordinates(x, y, angle, distance) {
    // Convert degrees to radians
    const rad_Lat = toRadians(x);
    const rad_Long = toRadians(y);
    const rad_Angle = toRadians(angle);
  
    // Calculate angular distance
    const rad_Ang_Distance = distance / 6371.0;
  
    // Compute new latitude
    const temp1 = Math.asin(
      Math.sin(rad_Lat) * Math.cos(rad_Ang_Distance) +
        Math.cos(rad_Lat) * Math.sin(rad_Ang_Distance) * Math.cos(rad_Angle)
    );
  
    // Compute new longitude
    const temp2 =
      rad_Long +
      Math.atan2(
        Math.sin(rad_Angle) * Math.sin(rad_Ang_Distance) * Math.cos(rad_Lat),
        Math.cos(rad_Ang_Distance) - Math.sin(rad_Lat) * Math.sin(temp1)
      ); 
  
    // Convert radians to degrees
    const p = toDegrees(temp1);
    const q = toDegrees(temp2);
  
    return { latitude: p, longitude: q };
  }
  
  // Helper function to convert degrees to radians
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  // Helper function to convert radians to degrees
  function toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
  
  // Example usage:
  const initialCoordinates = { latitude: 37.7749, longitude: -122.4194 };
  const newCoordinates = calculateNewCoordinates(
    initialCoordinates.latitude,
    initialCoordinates.longitude,
    45, // angle in degrees
    10 // distance in kilometers
  );
  
  console.log(newCoordinates);
  
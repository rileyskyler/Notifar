-- QUERY FOR USERS LOCATION HISTORY

SELECT locations.latitude, locations.longitude
FROM locations
INNER JOIN locators ON locations.PhoneNumber = locations.PhoneNumber
INNER JOIN users ON locators.locatorid = users.LocationId
WHERE users.locationId = 'test123'
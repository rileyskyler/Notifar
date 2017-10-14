-- SELECT locations.latitude, locations.longitude
-- FROM locations
-- INNER JOIN locators ON locations.PhoneNumber = locations.PhoneNumber
-- INNER JOIN users ON locators.locatorid = users.LocationId
-- WHERE users.locationId = 'test123'
-- ORDER BY id
-- DESC LIMIT 1


SELECT latitude, longitude
FROM locations
ORDER BY id
DESC LIMIT 1
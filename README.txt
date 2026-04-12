To run in local
    docker compose up --build > output.txt

For Render deployment:

Set Build Command: npm ci
Set Start Command: npm start
Add environment variables in Render dashboard

For testing



1. Get all categories (USER/ADMIN)

curl -X GET http://localhost:8082/categories \
  -b cookies.txt



2. Create category (ADMIN only)

curl -X POST http://localhost:8082/categories \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "name": "Smartphones",
    "description": "Mobile devices"
}'



3. Get all products (USER/ADMIN)

curl -X GET http://localhost:8082/products \
  -b cookies.txt



4. Get product by ID (USER/ADMIN)

curl -X GET http://localhost:8082/products/1 \
  -b cookies.txt



5. Create product (ADMIN only)

curl -X POST http://localhost:8082/products \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "name": "iPhone 15",
    "description": "Apple smartphone",
    "price": 999.99,
    "stock": 10,
    "category_id": 1,
    "image_url": "https://example.com/iphone.jpg"
}'



6. Update product (ADMIN only)

curl -X PUT http://localhost:8082/products/1 \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "name": "iPhone 15 Pro",
    "description": "Updated model",
    "price": 1199.99,
    "stock": 5,
    "category_id": 1,
    "image_url": "https://example.com/iphone-pro.jpg"
}'



7. Delete product (ADMIN only)

curl -X DELETE http://localhost:8082/products/1 \
  -b cookies.txt



8. Unauthorized test (no cookies)

curl -X GET http://localhost:8082/products


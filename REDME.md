## Welcome to the mini e-commerce website for fruits and vegetables

### strating process on local system (Prefer to run on local system)
-   goto frontend -> ``` cd fronted``` -> open terminal -> write and enter ``` npm run dev```

### website guide
1. At the very top the logo on the left side, and the right side has cart, menu, and login (for small screen).

2. clicking the loging you can login to our website.

3. cart will hold your all add to cart items.

4. at the landing page you can see ```Shop Now``` clicking that you can see all the products.

5. below that you can see few items clicking on the middle you can see the item details ,
6. Now clicking the ```ADD TO CART``` button you can add the item to your cart.

7. clicking the ```cart``` icon you can go to your cart. for the shipment of your products. 

8. based on fruit and vegetables category, clicking ```fruits``` only able to see fruits , and same for the vegetables.

9. Login and signup authentication is done using Auth0.(due to time issue).

### tailwind intregration 

1. install (needs to be done for new system)
   ```
   npm install -D tailwindcss
    npx tailwindcss init
    ```
2. at tailwindconfig.js add this(already done)
    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
     },
     plugins: [],
    }
    ```    
3.  add this at index.css (already done)
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Dependencies

    ```
    "@auth0/auth0-react": "^2.2.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.2.1",
    "react-router-dom": "^6.24.0"
    
    ```
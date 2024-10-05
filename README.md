# Pretty Queen
This is a web app for Pretty Queen Beauty Salon & Barber Shop for the viewing, purchasing, and selling of pretty queen products. As well as selling of services and appointment booking.
## Web App Development

```
The application will be built with react/nextjs and mongodb
- NextJS on for the frontend
	- typescript for type checking
	- zustand for state management
	- stripe for payment processing
	- nextjs server actions for async actions
	- css modules for styling
	- react-icons for icons
		
- MongoDB for the backend
	- firebase for image storing 
	- storage for products
	- storage for appointments
	- invoice storage

features include:
- [ ] products listings
- [ ] appointment booking
- [ ] product purchasing
```

## App Folder Structure

```
- app
	- products
		- ProductList
		- ProductCard
		- ProductFilter
	- services
		- ServiceList
		- ServiceItem
	- booking
		- BookingForm
		- FormItem
	- about
	- page (root homepage)
- components
	- Header
	- MobileNavigation
	- ui
		- Button
- public
	- images
- services
- utils
- constants
```

## Running App Locally

```
$ npm run dev 

to build

$ npm run build
```

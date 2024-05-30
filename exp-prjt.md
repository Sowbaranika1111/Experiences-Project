# Exp

#### State Variables 

- allow React components to manage and store data that changes over time. Unlike normal variables , state variables trigger a re-render of the component whenever their value changes
- This dynamic behavior enables React components to return active data updates and provide an ideal user experience

#### Context 

- created to share data ,when they need to be accessible by many components at different nesting levels or the components that are not directly related to each other

- To dislay all the experiences we create a context API in our prjt (Folder -> context,StoreContext.jsx)

#### Props

- props is a spl keyword in React that stands for properties nd is used for passing data from one component to another.
  
  - FoodItem is ExperiencesVideo
    all the exp displayed are from ExperiencesVideo

  - Cart is AddToFav
- create a component and then mount it in the App.jsx file

### AddYours popup component creation 

- Create a compo named AddYoursPopup
- Mount it in the App.jsx compo
- To display the popup create a state variable
- In the return part write code for displaying the popup based on true or false retuned from the AddYoursPopup.jsx compo
- send the showAddYours in the Home, which is inside return , to convert it to true or false, it is sent as props .. restructure it in the ExploreExperiences.jsx compo 
- On the video tag add onclick property and setAddYours as true
- go to AddYoursPopup.jsx

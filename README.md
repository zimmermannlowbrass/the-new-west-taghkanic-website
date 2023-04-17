
![demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjI0NDlhZTM0MGM4OGEzMzIwNjFkMWE3YmY3YjM5ODljOGFiNWM4OCZjdD1n/Ucq1Z1T0wUrPAmPBZY/giphy.gif)
#  The New West Taghkanic Website

    # Mission
*For this project, I will create a website dedicated to the greatest diner in the Hudson Valley area*


    -Section 1: Home-

**Section 1**

This is the home page when you enter the webiste. Users will be greeted by a short description as well as photos of the diner.

    -Section 2: Meals and Drinks-

**Section 2**

For the second and third tab, we will populate meal and drink items in each tab respectively. For each items container (be that food or drink), the following elements will be displayed: the item title, a picture of the item, a small description of the item, some buttons that relate to adding the item to cart, some buttons that relate to leaving a star review, and a delete button.

    -Section 2 Subsection 1: Adding Item to Cart-

**Section 2 Subsection 1**

To add the item to the cart, the user must first increment the cart value to be above 0. Once the value is above 0, the "Add to cart" button can be pressed. This will change the state to "add this item to the cart". We will cover this process more in the Cart section. Once added to the cart, a message will populate notifying the user of the cart change.

    -Section 2 Subsection 2: Leaving a Rating-

**Section 2 Subsection 2**

To leave a rating, the user must press the number of stars they would like to leave said item. Upon clicking, the stars will change color to correspond to the newly bestowed rating. As well, a message will populate thanking the user for their feedback. Ratings are patched to the db.json and thus persisted. Ratings can be reset via the "reset" button next to the rating. 

    -Section 2 Subsection 3: Delete the Item-

**Section 2 Subsection 3**

Lastly, items can be permenantly deleted from the API. When users press the delete button, they will first be prompted by an "are you sure?" message. To confirm deletion, users can then press the button again. After which, the item will be permenantly deleted from the API.


    -Section 2.5: Feedback Form-

**Section 2.5**

At the bottom of both the meal and the drink sections, there is a form for Users to suggest a food/drink be added to the menu. Users must submit the name, description, price, and optionally an image to persist the food to the API. Once submited, the new card should appear without having to refresh the page.


    -Section 3: CheckOut Cart-

**Section 3**

For this section, the user should be able to see all of the items added to their cart. Users should be able to see container cards of their items that show the item's name, picture, and subtotal price. The subtotal prices are added together to be displayed next to the "Total" banner. Each item card includes a "delete from cart" button which will remove the item from the cart. Upon deletion, no such "did you mean to delete" message will appear; the item will be immediately deleted from the cart and the total should change to reflect the changed balance. Items within the cart are not persisted. Therefore, if a user reloads the webpage, the items in the cart will be lost.

    -Section 4: About-

**Section 4**

This section is dedicated to the authenticity of the West Taghkonic Diner. Here, the user can find some historical information pertaining to the diner. To view this information, the user will need to click on the provided dates that correspond to each bullet of information. An iFrame map from google for the location of the diner next to a fun photo icon are at the bottom of the page.


[The real West Taghkonic Diner Website](https://www.wtdinerny.com/)


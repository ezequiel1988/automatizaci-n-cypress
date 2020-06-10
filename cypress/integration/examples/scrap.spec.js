
describe('Accedo a Wish', () => {
       it('Me registro en wish', () => {
              cy.clearCookies();
              cy.visit('https://www.wish.com/');
              //cy.get('.hVXHRo > .AuthenticationPage__FormTabs-wo9hra-18 > .isVqXQ').click();
              //cy.get('.bHVRfW > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('Juan');
              //cy.get('.AuthenticationPage__NameTextInputWrapper-wo9hra-12 > .cpgyde > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('Araoz');
              cy.get('.hVXHRo > .AuthenticationPage__FormTabs-wo9hra-18 > .isVqXQ').click();
              //cy.get('.hVXHRo > .AuthenticationPage__FormWrapper-wo9hra-7 > :nth-child(2) > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('admin@hotmail.es');
              cy.get('.AuthenticationPage__FormWrapper-wo9hra-7 > :nth-child(1) > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('admin@hotmail.es');

              //cy.get(':nth-child(3) > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('Admin2020');
              cy.get('.hVXHRo > .AuthenticationPage__FormWrapper-wo9hra-7 > :nth-child(2) > .WishTextInput__InputWrapper-sc-1k4jzwj-2 > .WishTextInput-sc-1k4jzwj-3').type('Admin2020');

              //cy.get('.hVXHRo > .AuthenticationPage__FormWrapper-wo9hra-7 > .Button-sc-1rnmncq-0').click();
              cy.get('.hVXHRo > .AuthenticationPage__FormWrapper-wo9hra-7 > .Button-sc-1rnmncq-0').click();

              cy.wait(60000);
              cy.get('[data-index="0"] > .ProductGrid__ProductGridRow-sc-1luslvl-3 > :nth-child(1) > .FeedTile__Wrapper-sc-1eb2kug-0 > .FeedTile__ImageWrapper-sc-1eb2kug-1 > .FeedTile__Image-sc-1eb2kug-3').click();
              
              if (Cypress.$(':nth-child(1) > .WishSelectInput__SelectBox-sc-1hxkg4o-0')) {
                     cy.get(':nth-child(1) > .WishSelectInput__SelectBox-sc-1hxkg4o-0').click();
                     cy.get(':nth-child(1) > .WishSelectInput__SelectBox-sc-1hxkg4o-0 > .WishSelectInput__SelectBoxDropdown-sc-1hxkg4o-3 > [data-index="0"] > .DimensionSection__DropdownOptionWrapper-sc-1sp8lqj-1 > .DimensionSection__DropdownOption-sc-1sp8lqj-2 > .DimensionSection__DimensionText-sc-1sp8lqj-3').click();
                
              }

              console.log(Cypress.$(':nth-child(2) > .WishSelectInput__SelectBox-sc-1hxkg4o-0'), 'Esto pertenece a el segundo input')
     
              if (Cypress.$(':nth-child(2) > .WishSelectInput__SelectBox-sc-1hxkg4o-0')) {
                     cy.get(':nth-child(2) > .WishSelectInput__SelectBox-sc-1hxkg4o-0').click();
                     cy.get(':nth-child(2) > .WishSelectInput__SelectBox-sc-1hxkg4o-0 > .WishSelectInput__SelectBoxDropdown-sc-1hxkg4o-3 > [data-index="0"] > .DimensionSection__DropdownOptionWrapper-sc-1sp8lqj-1 > .DimensionSection__DropdownOption-sc-1sp8lqj-2 > .DimensionSection__DimensionText-sc-1sp8lqj-3').click();
                      
              }
 
              cy.get('.BuyButton__Button-z0grbs-0').click();
              
              cy.wait(5000);
              cy.get('.CartSection__Wrapper-gh8209-0 > :nth-child(1)').click();
              cy.get('.WishButtons__WishButton-sc-13cvktr-0').click();
              cy.get('#addressLineOne').type('108 Madison Ave');
              cy.get('.CheckoutPage__CountrySelect-n9jrtr-26').click().select('United States');
              cy.get('#city').type('Birmingham');
              cy.get('#state').click().select('Alabama');
              cy.get('#zipcode').type('35005');
              cy.get('.CheckoutPage__NextButton-n9jrtr-4').click();


       })
    })
    
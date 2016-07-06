#language: en

Feature: Add product to checkout
	In order to buy several products in a supermarket
	As a clerk
	I want to add products to an existing checkout

	Scenario: Add a product to a checkout
	    Given an existing checkout with code "1"
	    When a supermarket clerk adds "Coca cola" to the checkout "1"
	    Then "Coca cola" is added to the checkout
	    And the checkout total amount is "2EUR"

# Part C: Finding the right amount to save away


def main():
    annual_salary = int(input("Enter your annual salary: "))
    # Percent of the salary you wish to save
    portion_saved = float(
        input("Enter the percent of your salary to save, as a decimal: ")
    )
    # Take the 25% of your $1M dream house total cost as portion for down payment
    portion_down_payment = 1000000 * 0.25
    # Divide the annual salary by 12 and store it in monthly_salary
    monthly_salary = annual_salary / 12
    # The current savings start with 0, the annual savings return is 4%, and the salary increase percentage
    # after every 6 months is 7%
    current_savings, r, semi_annual_raise = 0, 0.04, 0.07
    # Number of months to keep track of how many months it'll take to gather enough money for down payment
    number_of_months = 0

    # Keep on iterating until current_savings is less than portion for down payment
    while portion_down_payment > current_savings:
        # curren_savings + monthly salary's 4% + current saving's annual investment return of 4% divided by 12
        # for monthly calculation
        current_savings += (monthly_salary * portion_saved) + (
            (current_savings * r) / 12
        )
        # After each iteration increments number of months by 1
        number_of_months += 1
        # After every 6 months we increase the salary by semi annual raise percentage, our month start value is 0.
        # That means we increment after each month calculaion is complete and then we calculate if we have to increase
        # the salary or not.
        if number_of_months % 6 == 0:
            # We can do use annual salary to calculate this but it'll give us the same thing, we just need the annual salary
            # semi annual raise ammount and divide it by 12. Which is the same thing it's just we divided annual salary by 12
            # first and then calcualted semi annual raise amount
            monthly_salary += monthly_salary * semi_annual_raise

    # Print the number of months needed
    print(f"Number of months: {number_of_months}")


if __name__ == "__main__":
    main()

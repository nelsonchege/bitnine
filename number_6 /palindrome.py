def IsPalindrome():
  user_input = input("kindly Enter your word: ")
 
  def check_if_palindrome(user_input):
    reversed_word = user_input[::-1]
    return user_input == reversed_word

  #  get boolean if is a palidrome or not
  palindrome_value = check_if_palindrome(user_input)

  if palindrome_value:
    return user_input
  
  #  use list slicing to get the inverse word
  return user_input[::-1]
  
# the method can be made even simpler by inversing all the words 
# becouse a palindrome will return the same return 

print(IsPalindrome())
# Bugs to fix
- Incorrectly deleting budget items: items are just objects with state data that get components created from them. They are stored in a list called items. When I want to delete one of them, I am currently doing it by just removing the index, however this creates a problem because it shifts the indeces for all of the budget items later in the list. When I try to delete those items that were placed after the deleted item, the index is wrong and it deletes the wrong one.
    - possible fixes: create an empty list entry for the deleted item. This doesn't seem to be working.

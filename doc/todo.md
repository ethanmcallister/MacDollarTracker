# To to list:
- [x] Add a remove budget item.
- [ ] Add styling for hovering over the text boxes (need to be darker to show the boxes).
- [ ] Add capability for editing the budget group by clicking the the group name.
    - [ ] Ability to remove budget group for all groups except income. Add trash can button to the left during editing.
- Incorrectly deleting budget items: items are just objects with state data that get components created from them. They are stored in a list called items. When I want to delete one of them, I am currently doing it by just removing the index, however this creates a problem because it shifts the indeces for all of the budget items later in the list. When I try to delete those items that were placed after the deleted item, the index is wrong and it deletes the wrong one.
    - possible fixes: create an empty list entry for the deleted item. This doesn't seem to be working.
    - [ ] Within the same edit mode, ability to rename the group. This is immediately the focus (within the input, then user can choose to remove the group by clicking the trash can.)

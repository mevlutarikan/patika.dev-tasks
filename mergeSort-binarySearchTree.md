# Merge Sort
### Q: [16,21,11,8,12,22]

Yukarıdaki dizinin sort Merge Sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

## Answ:
[16,21,11,8,12,22]

    [16,21,11] - [8,12,22]
    [16,21] - [11] - [8,12] - [22]
    [11,16,21] - [8,12,22]
    [8,11,16,21,22]

Big O Notation = O(nlogn)

# Binary Search Tree

### Q:[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

### Answ:

            7 
         /    \
        5       8 
       / \        \
      1   6        9
     / \   
    0   3
       / \
      2   4

## Insertion Sort Algorithm

### Q1: [22,27,16,2,18,6]

Yukarıdaki dizinin insertion sort türüne göre aşamalarını yazınız.

### Answ:
    Step0:[22,27,16,2,18,6]
    Step1:[2,27,16,22,18,6]
    Step2:[2,6,16,22,18,27]
    Step3:[2,6,16,22,18,27]
    Step4:[2,6,16,18,22,27]
    Step5:[2,6,16,22,18,27]

### Q2: Dizinin Big-O gösterimini yazınız.

### Answ:
n-1 + n-2 + n-3 + .... + 1 =
n*(n-1)/2 = (n^2-n)/2
time Complexity: O(n^2)

### Q3: 18 sayısı hangi case kapsamına girer?

 - Average case: Aradığımız sayının ortada olması.
 - Worst case: Aradığımız sayının sonda olması.
 - Best case: Aradığımız sayının dizinin en başında olması.

### Answ:
    18 elamanı Average Case kapsamına girer.

### Q4: [7,3,5,8,2,9,4,15,6]

Yukarıdaki dizinin Insertion Sort'a göre ilk 4 adımını yazınız.

    Step0: [7,3,5,8,2,9,4,15,6]
    Step1: [2,3,5,8,7,9,4,15,6]
    Step2: [2,3,4,8,7,9,5,15,6]
    Step3: [2,3,4,5,7,9,8,15,6]
    Step4: [2,3,4,5,6,9,8,15,7]

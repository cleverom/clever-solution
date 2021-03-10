# clever-solution

EXPLANATION TO PROBLEM
from the question chaka server is a 2d mesh array
one(1) represents updated server and
zero(0) represents non updated server
only updated server(1) can update non updated server(0) and this can only happen if the updated server(1) is adjacent(up, down, left and right direction) to the non updated server(0).
also no server can be updated twice.
so we need to calculate the number of days it will take to update all chaka servers as the servers are only updated per day in batches.
ALGORITHM
First, I want to keep track of all the non-updated servers
Secondly, I want to keep track of the coordinates of all my updated servers
I defined a set of directions(that is left, downward, right and upward direction). This will enable me traverse through in the four directions with respect to an updated server;
after which, I need to continually check if there are still non-updated servers and coordinates of updated servers while traversing through the 2d array.
While traversing through using the two-dimensional (2D) array of directions and the coordinate of updated server, I need to check if there is any nonupdated server next to the updated server.
If there is, I turn it to updated by reassigning the value to one(1)
Then I subtract one from the non-updated server which I was keeping track of.
I also keep track of the coordinate of newly updated server in a new array and assign it to the previous array which is holding the initial updated server.
Finally, I increase the number of days by one(1). This process continues until all the non-updated server(0) are fully updated. If they cannot be updated, the function returns "cannot be updated". If they can be updated, the function returns the number of day or days.

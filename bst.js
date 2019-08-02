
var values = [90,3,21,45,32,11,34,2,555,65,-1]

//leaf node constructor function
function leaf_node(value,left,right){
    this.value = value
    this.left = left
    this.right =right
}

//constructor function to construct tree
function bst(){
    this.root = null
    this.head = null
}

//prototype methods
bst.prototype.add_leaf = function(value){
    if(this.head==null||undefined){
        this.head = new leaf_node(value)
    }else if(this.head.value > value){
        if(this.head.left==null||undefined){
            this.head.left = new leaf_node(value)
            //resetting head to root node
            this.head = this.root
        }else{
            //shifting head to left of current node
            this.head = this.head.left
            this.add_leaf(value)
        }
    }else{
        if(this.head.right==null||undefined){
            this.head.right = new leaf_node(value)
            //resetting head to root node
            this.head = this.root
        }else{
            //shifting head to right of current node
            this.head = this.head.right
            this.add_leaf(value)
        }
    }

    if(this.root == null||undefined){
        this.root = this.head
    }
}

//inorder output
bst.prototype.inorder = function(root){
    if(root){
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
}

//preorder output
bst.prototype.preorder = function(root){
    if(root){
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
    }
}


//construct tree object
tree = new bst();
//push child leaf values
for(value of values){
    tree.add_leaf(value)
}

tree.preorder(tree.root)
tree.inorder(tree.root)



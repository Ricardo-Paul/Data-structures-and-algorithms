const Node = require('./BinarySearchTreeNode.js').BinarySearchTreeNode;
const prompt = require('../prompt').rl;

function print(message){
  console.log(`*** ${message} ***`);
}

class BinarySearchTree {
    constructor(){
        this.root = null; // the first Node { right, left, data }
        this.insert = insert;
        this.inorder = inorder;
        this.findMinValue = findMinValue;
        this.findMaxValue = findMaxValue;
        this.find = find;
        this.show = () => this.root
    }
}

function find(value){
  let current_node = this.root; // always start exploring with the root node
  while(current_node.data !== value){
    if(value < current_node.data){ // travel down the left nodes while the value is <
      current_node = current_node.left
    } else { // travel down the right nodes while the value is >
      current_node = current_node.right;
    }
    if(current_node == null){
      console.log("Cannot find value", value)
      return null
    };
  }
  return console.log(current_node);
}

function findMaxValue(){
    let current_node = this.root;
    while(!(current_node.right == null)){
        current_node = current_node.right;
    };
    return console.log(current_node.data)
}

function findMinValue(){
    let current_node = this.root; // set the BST root as the current node
    while(!(current_node.left == null)){
        current_node = current_node.left
    }
    return console.log(current_node.data);
}                           

function insert(value){
    // if the root is null, replace it by a node with the new value
    if(this.root == null){
        this.root = new Node(value, null, null)
    } else {
        let current_node = this.root; //current_node is an object { left, data, right } left and right are objects too
        let parent;
        while(true){
            parent = current_node; // parent is a reference to the current node
            if(value < current_node.data){
                current_node = current_node.left;
                if(current_node == null){
                    parent.left = new Node(value, null, null); // set the current node value to a new node
                    break;
                }
            } else{
                current_node = current_node.right;
                if(current_node == null){
                    parent.right = new Node(value, null, null);
                    break;
                }
            }
        }
    }
};

function inorder(node){
    if(node == null){
        console.log('RETURNED');
        return;
    }
    inorder(node.left);
    console.log(node.data);
    inorder(node.right)

    // console.log('WORKS: ', node.left)
}

const numbers = new BinarySearchTree();
numbers.insert(23);
numbers.insert(54);
numbers.insert(13);
numbers.insert(7);
numbers.insert(2);


exports.numbers = numbers;
// check content

print("Binary Tree")
console.log(numbers.show());

print("BST inorder Traversal")
inorder(numbers.root); // keep in mind root is an object

print("Tree Min Value")
numbers.findMinValue();

print("Tree Max Value")
numbers.findMaxValue();



prompt.question("Search for a value in the BST ? \n ", (val) => {
  print("Node with a specific value");
  numbers.find(parseInt(val));
  prompt.close();
});
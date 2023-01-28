class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numVamp = 0;
    let ourVamp = this;
    while (ourVamp.creator) {
      numVamp++;
      ourVamp = ourVamp.creator;
    }
    return numVamp;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let me = this;
    let myCount = 0;
    let vampCount = 0;
    while (me.creator) {
      myCount++;
      me = me.creator;
    }
    while (vampire.creator) {
      vampCount++;
      vampire = vampire.creator;
    }
    if (myCount < vampCount) {
      return true;
    }
    return false;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let myVampire = this;
    if (myVampire.name === name) {
      return myVampire;
    }
    for (const subVampire of this.offspring) {
      const subVamp = subVampire.vampireWithName(subVampire.name);
      console.log(subVamp)
      if (subVamp.name === name) {
        return subVamp;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }


}



module.exports = Vampire;

/** Stretch **/

// Returns the closest common ancestor of two vampires.
// The closest common anscestor should be the more senior vampire if a direct ancestor is used.
// For example:
// * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
// * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
// closestCommonAncestor(vampire) {

// }

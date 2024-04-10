import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p className="pb-28">Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis mi libero. Donec fermentum ac eros euismod tincidunt. Integer aliquam est id risus rhoncus, et tempor dui varius. Donec porta tempus facilisis. Aliquam nec nulla quis augue sodales tempor in ac tellus. Sed tincidunt auctor consectetur. Curabitur suscipit tincidunt ipsum eu maximus. Sed cursus neque dolor, consectetur convallis justo blandit quis. Sed viverra nisi cursus, malesuada magna ut, ullamcorper ipsum. Donec venenatis pretium tortor eleifend ullamcorper. Maecenas justo purus, tempor sed metus in, interdum luctus tellus. Donec a augue eget nisl convallis auctor sed non lectus.
      </p>
    </div>
  );
}

export default ModalPage;
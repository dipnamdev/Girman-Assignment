import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Profile from '../../assets/user_profile.jpg';
import No_data from '../../assets/No_data.png';
import './UserCard.css';

const UserCard = () => {
  // State and Context
  const { SearchName, user_data } = useContext(UserContext);
  const [isModalOpen, setModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  // Open popup
  function openPopup(user) {
    setModal(true);
    setSelectedUser(user);
  }

  // Close modal
  function closeModal() {
    setModal(false);
  }

  // Filter users
  const normalizedSearch = SearchName.trim().toLowerCase();
  const filter_user = user_data.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      user.first_name.toLowerCase().includes(normalizedSearch) ||
      user.last_name.toLowerCase().includes(normalizedSearch) ||
      fullName.includes(normalizedSearch)
    );
  });

  return (
    <div className="card-wrapper">
      {filter_user.length > 0 ? (
        <div className="card-container">
          {filter_user.map((element, i) => (
            <div className="card" key={i}>
              <img src={Profile} alt={`${element.first_name} ${element.last_name}`} />
              <h1>{element.first_name} {element.last_name}</h1>
              <p>📍{element.city}</p>
              <p>☎️{element.contact_number}</p>
              <button onClick={() => openPopup(element)}>Fetch Details</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="error">
          <img src={No_data} alt="No data available" />
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>❌</button>
            <img src={Profile} alt={`${selectedUser.first_name} ${selectedUser.last_name}`} />
            <h2>{selectedUser.first_name} {selectedUser.last_name}</h2>
            <p>🚩📌📍{selectedUser.city}</p>
            <p>☎️{selectedUser.contact_number}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
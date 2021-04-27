import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

function ReviewFormModal({ restId }) {
    const user = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} disabled={!user}>Add Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm restId={restId} />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;

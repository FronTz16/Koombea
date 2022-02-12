/* eslint-disable no-multi-spaces */
import React, { createContext, useContext, useState }       from 'react';

import { Popup }                                            from 'components/common';
import * as Modals                                          from 'components/Modal';
/* eslint-enable no-multi-spaces */

const DEFAULT_MODAL_VALUES: ModalProps = {
    component: null,
    visible: false,
};

const DEFAULT_POPUP_VALUES: PopupProps = {
    message: '',
    onSubmit: () => null,
    visible: false,
    buttonTitle: '',
    title: '',
};

interface ContextProps {
    showModal: ({ component, modalProps }: ModalProps) => void,
    showPopup: ({ buttonTitle, title, message, onSubmit }: PopupProps) => void,
}

const ModalContext = createContext<ContextProps>(
    { } as ContextProps
);

/**
 * Modal Context System
 * Using Context we can call Modal from anywhere in the app by passing a few params instead of
 * importing each Modal components everywhere.
 *
 * We have two approaches to use this system
 *
 * Popups: Small modal that displays a message with an optional text and one single action Button.
 * To display a popup call showPopup()
 *
 * Modal: Customized modal that renders the component passed by param.
 * To display a modal call showModal()
 *
 * @param {Object} params
 * @param {ReactElement} params.children - Components that will have access to the context value
 *
 */
const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    const [modal, setModal] = useState<ModalProps>(DEFAULT_MODAL_VALUES);
    const [popup, setPopup] = useState<PopupProps>(DEFAULT_POPUP_VALUES);

    /**
     * Hides the modal
     */
    const closeModal = () => setModal({ ...modal, visible: false });

    /**
     * Hides the popup
     */
    const closePopup = () => setPopup({ ...popup, visible: false });

    /**
     * Makes a modal visible
     *
     * @param {Object} params
     * @param {string} params.component - Name of the Modal component to be rendered
     * @param {Object} params.modalProps - Object with props to be passed to the Modal Component
     *
     */
    const showModal = ({ component, modalProps }: ModalProps) => {
        setModal({
            // TODO: find a way to type the component property.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: Modals[component],
            modalProps,
            visible: true,
        });
    };

    /**
     * Makes a popup visible
     *
     * @param {Object} params
     * @param {string} [params.buttonTitle] - Title text of the action Button
     * @param {string} params.message - Message to be displayed inside the popup
     * @param {function} [params.onSubmit] - Function called when the action Button is pressed
     * @param {string} [params.title] - Title text
     *
     */
    const showPopup = ({
        buttonTitle,
        message,
        onSubmit,
        title,
        closable,
    } : PopupProps) => {

        setPopup({
            buttonTitle,
            message,
            onSubmit: onSubmit || closePopup,
            title,
            visible: true,
            closable,
        });
    };

    const context = {
        showModal,
        showPopup,
    };

    return (

        <ModalContext.Provider value={context}>
            {children}

            {/* Popup */}
            <Popup
                buttonTitle={popup.buttonTitle}
                message={popup.message}
                onClose={closePopup}
                onSubmit={popup.onSubmit ? popup.onSubmit : closePopup}
                title={popup.title}
                visible={popup.visible}
                closable={popup.closable}
            />

            {/* Modal */}
            {modal.visible &&
                // TODO: find a way to type modal.component the 'component property'.
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <modal.component
                    {...modal.modalProps}
                    onClose={closeModal}
                    visible={modal.visible}
                />
            }
        </ModalContext.Provider>
    );
};

interface ModalContextProviderProps {
    children: React.ReactNode;
}


interface ModalProps {
    modalProps?: Record<string, unknown>;
    visible?: boolean;
    component?: React.ReactNode;
}

interface PopupProps {
    message: string;
    onSubmit?: () => void;
    visible?: boolean;
    buttonTitle?: string;
    title: string;
    closable?: boolean;
}

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;

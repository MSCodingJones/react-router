import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'
import { getContacts, createContact } from "../contacts"

export async function loader () {
    const contacts = await getContacts ()
    return { contact }
}

export async function action() {
    const contact = await createContact()
    return { contact }
}

const root = ()=> {}

    const { contact } =useLoaderData()
    return(
        <>
        <aside id="sidebar">
            <h1>Shaquella&apos;s Contacts</h1>
            <div>
                <form id="serach-form" role="search">
                    <input
                        id='q'
                        aria-label="Search contacts"
                        placeholder="search"
                        type="search"
                        name="q"
                    />     
                    </div>
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                    />
                    <div className="sr-only" aria-live="polite"></div> 
                </form>  
                <Form method="POST">
                    <button type="submit">New</button>
                </Form>  
            </div> 
            <nav>
                {contacts.length ? (
                )}
            </nav>
        <Form method="POST" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First Name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last Name"
                    type="text"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@shaquella"
                    defaultValue={contact?.twitter}
                />
            </label>

            <label>
                <span>Avatar URL</span>
                <input
                aria-label='avatar URL'
                    type="text"
                    name="twitter"
                    placeholder="https://example.com/avatar.jpg"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={6}
                    />
            </label>
            <button type="submit">Save</button>
            <button></button>
       </Form>
    )
}

export default EditContact
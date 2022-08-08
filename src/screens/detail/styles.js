import {StyleSheet} from 'react-native';

const SPACING = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 35,
    fontWeight: '400',
    marginBottom: 5,
  },
  backText: {
    fontSize: 20,
  },
  authorDetail: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'justify',
    color: 'grey',
  },

  listItem: {
    marginTop: 30,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 800,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'justify',
  },
  description: {
    fontSize: 18,
    opacity: 0.7,
    textAlign: 'justify',
  },
  commentText: {
    fontSize: 22,
    fontWeight: '700',
  },
  commentContainer: {
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    marginVertical: 20,
    paddingLeft: 10,
  },
  commentAuthor: {
    fontSize: 18,
    fontWeight: '500',
  },
  commentDate: {
    fontSize: 14,
    opacity: 0.8,
    color: '#0099cc',
  },
  comment: {
    fontSize: 15,
    fontWeight: '400',
  },
  noComments: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  noCommentText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
